import {FaUser} from 'react-icons/fa'

const UserWidget = ({url='#'}) => {
    return (
        <li>
            <a href={url}><FaUser size='20' /></a>
        </li>
    )
}

export default UserWidget