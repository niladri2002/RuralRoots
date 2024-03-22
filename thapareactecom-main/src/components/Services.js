import styled from "styled-components";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { IoIosBasket } from "react-icons/io";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
            <MdLocalGroceryStore className="icon" />
              <h3>Local Grocery Delight</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
              <FaHandHoldingHeart className="icon" />
                <h3>Support Local Artisans</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
              <GiFarmTractor className="icon" />
                <h3>Farm-Fresh Goods</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
            <IoIosBasket className="icon" />
              <h3>Easy and Secure Shopping</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default Services;