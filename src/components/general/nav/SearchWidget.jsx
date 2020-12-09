import {FaSearch} from 'react-icons/fa'

const SearchWidget = ({url='#'}) => {
    return (
        <li>
            <a href={url}><FaSearch size='20' /></a>
        </li>
    )
}

export default SearchWidget