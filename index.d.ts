declare module 'kepler.gl' {
  export default KeplerGl;
}

declare module 'kepler.gl/reducers' {

  /**
   * Kepler.gl reducer to be mounted to your store. You can mount `keplerGlReducer` at property `keplerGl`, if you choose
   * to mount it at another address e.g. `foo` you will need to specify it when you mount `KeplerGl` component in your app with `getState: state => state.foo`
   * @public
   * @example
   * import keplerGlReducer from 'kepler.gl/reducers';
   * import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
   * import {taskMiddleware} from 'react-palm/tasks';
   *
   * const initialState = {};
   * const reducers = combineReducers({
   *   // <-- mount kepler.gl reducer in your app
   *   keplerGl: keplerGlReducer,
   *
   *   // Your other reducers here
   *   app: appReducer
   * });
   *
   * // using createStore
   * export default createStore(reducer, initialState, applyMiddleware(taskMiddleware));
   */
  export type Reducer<T> = (state: T, action: AnyAction) => T;
  export const keplerGlReducer: Reducer<any>;
}

declare module 'react-palm/tasks' {
  export var taskMiddleware: (store: any) => middleWare;
  export var middleWare: (next: any) => (action: any) => Promise<void> | Promise<[any, any, any, any, any, any, any, any, any, any]>;
}

declare module 'kepler.gl/actions' {
  import { createAction } from 'redux-actions';
  import ActionTypes from 'constants/action-types';
  /**
   * Add data to kepler.gl reducer, prepare map with preset configuration if config is passed.
   * Kepler.gl provides a handy set of utils to parse data from different formats to the `data` object required in dataset. You rarely need to manually format the data obejct.
   *
   * Use `KeplerGlSchema.getConfigToSave` to generate a json blob of the currents instance config.
   * The config object value will always have higher precedence than the options properties.
   *
   * Kepler.gl uses `dataId` in the config to match with loaded dataset. If you pass a config object, you need
   * to match the `info.id` of your dataset to the `dataId` in each `layer`, `filter` and `interactionConfig.tooltips.fieldsToShow`
   *
   * @memberof main
   * @param {Object} data
   * @param {Array<Object>|Object} data.datasets - ***required** datasets can be a dataset or an array of datasets
   * Each dataset object needs to have `info` and `data` property.
   * @param {Object} data.datasets.info -info of a dataset
   * @param {string} data.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
   * @param {string} data.datasets.info.label - A display name of this dataset
   * @param {Object} data.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
   * @param {Array<Object>} data.datasets.data.fields - ***required** Array of fields,
   * @param {string} data.datasets.data.fields.name - ***required** Name of the field,
   * @param {Array<Array>} data.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
   *
   * @param {Object} data.options
   * @param {boolean} data.options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
   * place the map view within the data points boundaries.  `options.centerMap` will override `config.mapState` if passed in.
   * @param {boolean} data.options.readOnly `default: false` if `readOnly` is set to `true`
   * the left setting panel will be hidden
   * @param {boolean} data.options.keepExistingConfig whether to keep exiting map data and associated layer filter  interaction config `default: false`.
   * @param {Object} data.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
   * @public
   * @example
   *
   * // app.js
   * import {addDataToMap} from 'kepler.gl/actions';
   *
   * const sampleTripData = {
   *  fields: [
   *    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
   *    {name: 'pickup_longitude', format: '', type: 'real'},
   *    {name: 'pickup_latitude', format: '', type: 'real'}
   *  ],
   *  rows: [
   *    ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
   *    ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
   *    ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576],
   *  ]
   * };
   *
   * const sampleConfig = {
   *   visState: {
   *     filters: [
   *       {
   *         id: 'me',
   *         dataId: 'test_trip_data',
   *         name: 'tpep_pickup_datetime',
   *         type: 'timeRange',
   *         enlarged: true
   *       }
   *     ]
   *   }
   * }
   *
   * this.props.dispatch(
   *   addDataToMap({
   *     datasets: {
   *       info: {
   *         label: 'Sample Taxi Trips in New York City',
   *         id: 'test_trip_data'
   *       },
   *       data: sampleTripData
   *     },
   *     option: {
   *       centerMap: true,
   *       readOnly: false,
   *       keepExistingConfig: false
   *     },
   *     info: {
   *       title: 'Taro and Blue',
   *       description: 'This is my map'
   *     }
   *     config: sampleConfig
   *   })
   * );
   */
  export const addDataToMap: any;

}