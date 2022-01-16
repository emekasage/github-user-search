import React, { useEffect, useState } from "react";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import { token } from "./Credentials";
import Pagination from "./Pagination";
import Results from "./Results";

export default function Users(props) {
  const [query, setQuery] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [filteredItems, setFilteredItem] = useState([]);

  const search = async () => {
    const BASE_URL = `https://api.github.com/search/users?q=`;
    await fetch(`${BASE_URL}${query}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (json) => {
        var { total_count } = json;
        var itemss = [...json.items];
        if (typeof itemss[0] !== "undefined") {
          await itemss.forEach(async (thisItem, index) => {
            var { url } = thisItem;
            await fetch(`${url}?token=${token}`, { method: "GET" })
              .then((response) => response.json())
              .then(async (res_json) => {
                itemss[index].user_details = res_json;
                await setItems([...itemss]);
              });
          });
        }
        await setTotalCount(total_count);
      })
      .catch((error) => console.log("error", error));
  };
  const filterItems = async () => {
    var temp_items = await items.filter((thisItem, index) => {
      if (index >= page * perPage && index < (page + 1) * perPage) {
        return true;
      }
      return false;
    });
    await setFilteredItem(temp_items);
  };
  useEffect(() => {
    filterItems();
  }, [page, items, perPage]);

  return (
    <div className="user-search">
      <h2>Github User Search</h2>
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search for a user e.g emekasage"
            onChange={(event) => setQuery(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
          />
          {/* Form Submission */}
          <Button variant="secondary" onClick={() => search()}>
            Search
          </Button>
        </InputGroup>
      </FormGroup>

      <Results items={filteredItems} total_count={totalCount} />

      <Pagination
        page={page}
        setPage={setPage}
        items={items}
        perPage={perPage}
      />
    </div>
  );
}
