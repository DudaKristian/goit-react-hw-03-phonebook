import shortId from "shortid"
import PropTypes from 'prop-types';

const Filter = ({onChange}) => {

    const filterInputId = shortId.generate();
    
    return (
        <div>
            <label htmlFor={filterInputId}>
                Find contacts by name <br />
                <input type="text"
                    name="filter"
                    id={filterInputId}
                    onChange={onChange}
                    />
            </label>
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Filter