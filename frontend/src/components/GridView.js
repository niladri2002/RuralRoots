import React from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const GridView = ({ products }) => {
  console.log("GridView",products)
  const [query, setQuery] = React.useState('');
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    setFilteredProducts(products); // Initialize filteredProducts with initial products
  }, [products]);

  const getProducts = async (query) => {

    try {
      const res = await axios.get(`http://127.0.0.1:8000/products/list/?keyword=${query}`);
      const data = res.data;
      console.log(data)
      setFilteredProducts(data);
    } catch (error) {
      console.error("error")
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch callback with the query
    getProducts(query)
  };

  return (
    <Wrapper className="section">
      <form onSubmit={handleSubmit} style={{'position': "relative", top: '-15vh', left: '-23vw'}}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        style={{'marginInline': '9px'}}
      />
      <button type="submit">Search</button>
    </form>
      <div className="container">
        {filteredProducts.map((shop) => (
          <div key={shop.id}>
            <h2>{shop.name}</h2>
            <br></br>
            <div className="grid grid-three-column">
              {shop.products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
            <hr /> {/* Draw a line to differentiate between shops */}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;