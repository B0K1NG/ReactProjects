const FilterButtons = ({ filter, setFilter }) => {
    return (
        <div>
            <button 
            onClick={() => setFilter('all')}>All Tasks</button>
            <button 
            onClick={() => setFilter('active')}>Active Tasks</button>
            <button 
            onClick={() => setFilter('completed')}>Completed Tasks</button>
        </div>
    );
};

export default FilterButtons;