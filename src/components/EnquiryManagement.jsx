import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import  { useState } from 'react';
import * as React from 'react';
import EnquiryTable from './EnquiryTable';


function  EnquiryManagement() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  

  const currentYear = new Date().getFullYear();
  const lastYear = new Date().getFullYear() - 1;
  const years = Array.from({length: 20}, (_, i) => (lastYear -i) + '-' + (currentYear - i));  

  const yearOptions = years.map(year => (
    <option key={year} value={year}>{year}</option>
  ));
  
  return (
    <Box>
      <div style={{display:'flex', marginLeft:"25%", marginTop:'10px'}}>
      <select style={{padding:'10px', width:'150px'}}value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
    {yearOptions}
      </select>
      <select style={{padding:'10px', width:'150px'}} >
        <option>supplier Name</option>
      </select>
      </div>
      <Box>
          <Tabs className='Tabs'  style={{textTransform:'none'}} value={tabIndex} onChange={handleTabChange}>
          <Tab  className= 'Tab' style={{textTransform:'none'}} label="All Enquiries" />
          <Tab  className= 'Tab'  style={{textTransform:'none'}} label="New Quotes Received" />
          <Tab  className= 'Tab'  style={{textTransform:'none'}} label="Accepted" />
          <Tab  className= 'Tab'  style={{textTransform:'none'}}label="Rejected" />
          <Tab  className= 'Tab'  style={{textTransform:'none'}} label="Open Enquiries" />
          <Tab  className= 'Tab'  style={{textTransform:'none'}} label="Closed Enquiries" />
        </Tabs>
      </Box>
    <div style={{display:'flex', marginLeft:"20px", marginTop:'10px'}}> 
    <select style={{padding:'10px', width:'100px'}}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <p style={{marginLeft:'12px'}}>records</p>
    <div  style={{display:'flex', marginLeft:"34%"}}><p style={{marginLeft:'12px'}}>Search:</p><input type="text" placeholder="Search By Enquiasry ID/Buyer Name / Item Name"/></div>
    </div> 
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
           
            <EnquiryTable/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
              <EnquiryTable/>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
             <EnquiryTable/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default EnquiryManagement;