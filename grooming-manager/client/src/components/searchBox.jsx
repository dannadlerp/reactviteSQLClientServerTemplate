import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = () => {
  // State to hold the list of items retrieved from the database
  const [items, setItems] = useState([]);

  // State to hold the current search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // State to hold the filtered list of items based on the search term
  const [filteredItems, setFilteredItems] = useState([]);

  // useEffect to fetch the list of items from the server when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Make a GET request to the server to retrieve items
        const response = await axios.get("http://localhost:5000/items");

        // Set the retrieved items to the state
        setItems(response.data);

        // Initialize the filtered items with the full list of items
        setFilteredItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the fetchItems function
    fetchItems();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  // useEffect to filter the items based on the search term whenever the search term or items change
  useEffect(() => {
    // Filter items by checking if the item's name includes the search term (case insensitive)
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]); // Dependencies are searchTerm and items

  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state on input change
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
      {/* List of filtered items */}
      <ul style={{ listStyleType: "none", padding: "0", margin: "20px 0 0" }}>
        {filteredItems.map((item) => (
          <li
            key={item.id}
            style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}
          >
            {item.name} {/* Display the name of the item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
