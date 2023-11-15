import { useState, useEffect } from "react";

const LandingPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk", // Replace with your access token
            },
            body: JSON.stringify({
              query: `
              {
               propertyCollection(limit: ${limit},  ${
                selectedCategory !== null
                  ? `, where: { category: "${selectedCategory}" }`
                  : ""
              }) {
                  items {
                    id
                    title
                    address
                    category
                    image {
                      url
                    }
                  }
                }
              }
            `,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          setData(result.data.propertyCollection.items);
        } else {
          setError(result.errors || "Something went wrong");
        }
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, selectedCategory]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category === "All categories" ? null : category);
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="custom-container">
        <div className="title-main">
          <h2>Properties</h2>
          <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        </div>
        <div className="categories-label">
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option selected>All categories</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="properties-block">
          <div className="row">
            {data.map((property) => (
              <div className="col-md-4 box-item-main" key={property.id}>
                <div className="box-item-inner">
                  <img src={property?.image?.url} />
                  <div className="box-content">
                    <h2>{property.title}</h2>
                    <div className="address">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>{property.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="load-button">
            <a className="load-btn" onClick={handleLoadMore}>
              Load more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
