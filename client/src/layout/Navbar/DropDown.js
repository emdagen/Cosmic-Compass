import styled from 'styled-components';
import zodiacSigns from '../../data/zodiacData';
import { NavLink } from 'react-router-dom';
const DropDown = () => {
  return (
    <StyledDrop>
      <div className='dropDown'>
        <div className='dropIt'>
          <a>Signs</a>
        </div>

        <div className='dropdown-menu'>
          {Object.keys(zodiacSigns).map((signs) => {
            return (
              <ul>
                <li>
                  <NavLink className='link' to={`/zodiac/${signs}`}>
                    <a>{signs}</a>
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </StyledDrop>
  );
};

const StyledDrop = styled.div`
  position: relative;
  .link {
    text-decoration: none;
    color: black;
  }
  .dropDown {
    position: relative;
    display: inline-block;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% + 0.25rem);
    background-color: white;
    padding: 0.75rem;
    border-radius: 0.25rem;
    z-index: 1;
    transition: 250ms;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .dropDown:hover .dropdown-menu {
    display: block;
  }

  li {
    list-style: none;
  }
  li:hover {
    color: blue;
  }
`;
export default DropDown;
