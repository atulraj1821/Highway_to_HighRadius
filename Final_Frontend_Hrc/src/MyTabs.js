import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DataGridComponent from './DataGridComponents';
import AddUserForm from './AddUserForm';
import AnalyticsView from './Analytics';
import AdvancedSearch from './AdvancedSearchDialog';

function MyTabs() {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAdvancedSearch = () => {
    // Handle advanced search logic
  };

  return (
    <div style={{ textAlign: 'left', background: 'grey' }}>
      <Tabs value={value} onChange={handleChange} centered={false} style={{ paddingRight: '0px' }}>
        <Tab label="HOME" />
        <Tab label="ADD INVOICE" />
        <Tab label="ANALYTICS" />
        <AdvancedSearch />
      </Tabs>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', marginLeft: '700px' }}>
        <form noValidate autoComplete="off">
          <TextField
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              width: '200px',
              height: '30px',
              position: 'absolute',
              top: '21%',
              right: '210px',
            }}
          />
        </form>
      </div>

      {/* Other components and elements */}

      {/* <Button
        variant="contained"
        color="secondary"
        onClick={handleAdvancedSearch}
        style={{
          width: '150px',
          height: '45px',
          position: 'absolute',
          top: '30%',
          right: '10px',
          backgroundColor: 'lightgreen',
        }}
      >
        Advanced Search
      </Button> */}

      {/* Other components and elements */}
      
      {value === 0 && <DataGridComponent searchQuery={searchQuery} />} {/* Pass searchQuery and setSearchQuery as props */}
      {value === 1 && <AddUserForm />}
      {value === 2 && <AnalyticsView />}
    </div>
  );
}

export default MyTabs;
