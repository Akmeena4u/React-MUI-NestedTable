import * as React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  Checkbox,
  Collapse,
  IconButton,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const OverviewTab = () => {
  const [openPackages, setOpenPackages] = React.useState({});

  const handlePackageClick = (packageName) => {
    setOpenPackages((prevOpenPackages) => ({
      ...prevOpenPackages,
      [packageName]: !prevOpenPackages[packageName],
    }));
  };

  const handleActivityClick = (packageName, activityName) => {
    setOpenPackages((prevOpenPackages) => ({
      ...prevOpenPackages,
      [packageName]: {
        ...prevOpenPackages[packageName],
        [activityName]: !prevOpenPackages[packageName][activityName],
      },
    }));
  };

  const handleWorkItemClick = (packageName, activityName, workItem) => {
    // Handle work item click here
  };

  const civilPackages = [
    {
      name: 'Civil 1',
      rate: 568.80,
      total: 24897623,
      activities: [
        { name: 'Activity 1', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 2', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 3', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 4', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
      ],
    },
    // Include other civil packages here...
    {
      name: 'Civil 2',
      rate: 568.80,
      total: 24897623,
      activities: [
        { name: 'Activity 1', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 2', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 3', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 4', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
      ],
    },
    {
      name: 'Civil 3',
      rate: 568.80,
      total: 24897623,
      activities: [
        { name: 'Activity 1', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 2', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 3', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 4', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
      ],
    },
    {
      name: 'Civil 4',
      rate: 568.80,
      total: 24897623,
      activities: [
        { name: 'Activity 1', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 2', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 3', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 4', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
      ],
    },
    {
      name: 'Civil 5',
      rate: 568.80,
      total: 24897623,
      activities: [
        { name: 'Activity 1', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 2', rate: 568.80, total: 24897623, workItems: ['Work Item 1', 'Work Item 2', 'Work Item 3'] },
        { name: 'Activity 3', rate: 568.80, total: 24897623, workItems: ['Work Item 1'] },
        { name: 'Activity 4', rate: 568.80, total: 24897623, workItems: ['Work Item 1'] },
      ],
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{ fontWeight: 'bold', borderBottom: '2px solid #000000' }}>
              <Checkbox /> Packages
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000000' }}>Rate (in sqft)</TableCell>
            <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #000000' }}>Total</TableCell>
            <TableCell /> {/* Empty cell for collapsible icon */}
          </TableRow>
        </TableHead>

        <TableBody>
          {civilPackages.map((civilPackage) => (
            <React.Fragment key={civilPackage.name}>
              {/* Civil package name row */}
              <TableRow>
                <TableCell colSpan={2} sx={{ fontWeight: 'bold', borderBottom: '1px solid #e0e0e0' }}>
                  <Checkbox onChange={() => handlePackageClick(civilPackage.name)} />
                  {civilPackage.name}
                </TableCell>

                <TableCell sx={{ borderBottom: '1px solid #e0e0e0' }}>{civilPackage.rate}</TableCell>
                <TableCell sx={{ borderBottom: '1px solid #e0e0e0' }}>{civilPackage.total}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handlePackageClick(civilPackage.name)} color="primary">
                    {openPackages[civilPackage.name] ? '-' : '+'}
                  </IconButton>
                </TableCell>
              </TableRow>

              {/* Collapse for activities based on civil package */}
              <Collapse in={openPackages[civilPackage.name] || false}>
                {civilPackage.activities.map((activity) => (
                  <React.Fragment key={activity.name}>
                    {/* Activity name row */}
                    <TableRow>
                      <TableCell />
                      <TableCell>
                        <Checkbox onChange={() => handleActivityClick(civilPackage.name, activity.name)} />
                        {activity.name}
                      </TableCell>
                      <TableCell>{activity.rate}</TableCell>
                      <TableCell>{activity.total}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleActivityClick(civilPackage.name, activity.name)}>
                          {openPackages[civilPackage.name]?.[activity.name] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    {/* Collapse for work items based on activity */}
                    <Collapse in={openPackages[civilPackage.name]?.[activity.name] || false}>
                      {activity.workItems.map((workItem) => (
                        <TableRow key={workItem}>
                          <TableCell />
                          <TableCell colSpan={4}>
                            <Checkbox onChange={() => handleWorkItemClick(civilPackage.name, activity.name, workItem)} />
                            {workItem}
                          </TableCell>
                        </TableRow>
                      ))}
                    </Collapse>
                  </React.Fragment>
                ))}
              </Collapse>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OverviewTab;

