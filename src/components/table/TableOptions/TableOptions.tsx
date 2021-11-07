import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingType, sortingTypeValues } from '../../../redux/users/reducer';
import { sortSelector } from '../../../redux/users/selector';

/**
 * Component for table options, such as sorting
 * @return JSX.Element
 */
const TableOptions: React.FC = () => {
  const dispatch = useDispatch();
  const sortingType = useSelector(sortSelector);
  const [selectValue, setSelectValue] = useState(sortingType);

  // Getting sorting settings from local storage
  useEffect(() => {
    const sortType = localStorage.getItem('sortType') as sortingTypeValues;
    if (sortType) {
      setSelectValue(sortType);
      dispatch(setSortingType(sortType));
    }
  }, []);

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value as sortingTypeValues);
    localStorage.setItem('sortType', event.target.value);
    dispatch(setSortingType(event.target.value as sortingTypeValues));
  };

  return (
    <div className='my-5'>
      <label className="block text-left">
        <span className="text-indigo-600 mx-1">Выберите сортировку:</span>
        <select
          className="bg-indigo-200 py-1 form-select w-full md:w-1/3 md:mx-2 mt-1"
          onChange={onSelectChange}
          value={selectValue}
        >
          <option value='ascending'>По возрастанию</option>
          <option value='descending'>По убыванию</option>
        </select>
      </label>
    </div>
  );
};

export default TableOptions;
