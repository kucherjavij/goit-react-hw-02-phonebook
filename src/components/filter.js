import PropTypes from "prop-types";


function Filter ({value, onChange}) {
    return (
        <label>
            <span>Find contacts by name</span>
            <br/>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes={
    value:  PropTypes.string,
    onChange: PropTypes.func
}
export default Filter;