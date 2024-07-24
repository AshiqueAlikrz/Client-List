import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DatePickerComponent from "./DatePicker";
import BasicSelect from "./Selecter";
import SearchAppBar from "./SearchBar";
import TableList from "./TableList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Clients" className="!font-sans !text-black " {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="w-full h-16 flex justify-between mb-4 ">
          <div className="w-2/6 h-16  flex gap-2 items-center m-2 p-2  ">
            <DatePickerComponent dateLabel="Start Date" />
            <DatePickerComponent dateLabel="End Date" />
          </div>
          <div className="flex justify-evenly w-3/6 h-16 m-2 ">
            <BasicSelect />
            <SearchAppBar />
          </div>
        </div>
        <div className="w-full h-auto  overflow-y-scroll scrollbar-thin  ">
          <TableList />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
