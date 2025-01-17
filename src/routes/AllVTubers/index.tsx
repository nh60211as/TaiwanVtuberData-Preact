import DropDownList from '../../components/DropDownList';
import FilterWindow from '../../components/FilterWindow';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import tableStyle from '../../style/DataTableStyle.module.css';
import { DebutDateColumn } from '../../tableTypes/DebutDateColumn';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { VTuberDisplayDataFilterModel } from '../../types/FilterType/VTuberDisplayDataFilterModel';
import { VTuberDisplayData } from '../../types/TableDisplayData/VTuberDisplayData';
import { debutDateExist } from '../../utils/DebutInfoUtils';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { filterFunction } from '../../utils/FilterModelHelper';
import { getValueByCondition } from '../../utils/GenericMethod';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import {
  SortMethod,
  SubscriberCountDescendingSort,
} from '../../utils/sort/VTuberSort';
import { VTuberBasicToDisplay } from '../../utils/transform/BasicTransform';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface AllVTubersPageProps {
  dictionary: Dictionary;
}

const AllVTubersPage: FunctionalComponent<AllVTubersPageProps> = (
  props: AllVTubersPageProps,
) => {
  document.title = `${props.dictionary.header.allVTubers} | ${props.dictionary.header.title}`;

  const [sortMethod, setSortMethod] = useState<SortMethod>('YouTube+Twitch');

  const columns: Array<TableColumn<VTuberDisplayData>> = [
    // only show debut date column when sort by debut date
    {
      ...DebutDateColumn(),
      sortable: true,
      omit: sortMethod !== 'debutDate',
    },
    NameColumn(),
    YouTubeTwitchCountColumn(),
    PopularVideoColumn(),
    GroupColumn(),
    NationalityColumn(),
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDisplayData>>([]);
  const [filterModel, setFilterModel] = useState<VTuberDisplayDataFilterModel>({
    name: null,
    YouTubeId: null,
    TwitchId: null,
    group: null,
    nationality: null,
    debutDate: null,
  });
  const filteredData = data
    .filter((e) => filterFunction(e, filterModel))
    // only filter by by debutDateExist if sort method is debut date
    .filter((e) =>
      getValueByCondition<boolean>(
        sortMethod === 'debutDate',
        () => debutDateExist(e.debutInfo),
        () => true,
      ),
    )
    .sort(SubscriberCountDescendingSort(sortMethod));

  const searchBarComponent = useMemo(() => {
    const optionValue: Array<{
      option: JSX.Element;
      value: SortMethod;
    }> = [
      {
        option: (
          <Text id="table.YouTubeTwitchCount">
            YouTube Subscribers + Twitch Followers
          </Text>
        ),
        value: 'YouTube+Twitch',
      },
      {
        option: (
          <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>
        ),
        value: 'YouTube',
      },
      {
        option: <Text id="table.TwitchFollowerCount">Twitch Followers</Text>,
        value: 'Twitch',
      },
      {
        option: <Text id="table.debutDate">Debut Date</Text>,
        value: 'debutDate',
      },
    ];

    const handleFilterWindow = (
      filterModel: VTuberDisplayDataFilterModel,
    ): void => {
      setFilterModel(filterModel);
    };

    const fieldPlaceHolderMappings: Map<string, string> = new Map<
      string,
      string
    >([
      ['name', props.dictionary.table.searchByDisplayName],
      ['YouTubeId', props.dictionary.table.searchByYouTubeId],
      ['TwitchId', props.dictionary.table.searchByTwitchId],
      ['group', props.dictionary.table.searchByGroup],
      ['nationality', props.dictionary.table.searchByNationality],
      ['debutDate', props.dictionary.table.searchByDate],
    ]);

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.sortingMethod}
          value={sortMethod}
          optionValue={optionValue}
          onChange={(e: any) => setSortMethod(e.target.value)}
        />
        <FilterWindow
          filterModel={filterModel}
          fieldPlaceHolderMappings={fieldPlaceHolderMappings}
          openSearchText={props.dictionary.text.openSearch}
          closeSearchText={props.dictionary.text.closeSearch}
          onChange={handleFilterWindow}
        />
      </div>
    );
  }, [filterModel, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers('all').then((res) => {
      setData(res.data.VTubers.map((e) => VTuberBasicToDisplay(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h1>
        <Text id="header.allVTubers">All VTubers</Text>
        {GetCurrentNationalitySpan()}
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default AllVTubersPage;
