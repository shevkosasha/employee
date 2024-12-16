import './search-panel.css';

const SearchPanel = ({onSearch}) => {
    return (
        <input type="text" onChange={(e) => onSearch(e.currentTarget.value)}
                className="form-control search-input"
                placeholder="Search an employee"/>
    )
}

export default SearchPanel;