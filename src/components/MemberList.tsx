import Member from './Member';
import { Box, List, ListItem, ListItemIcon, ListItemText, Checkbox, Divider }  from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';


function MemberList() {
  const members = useAppSelector(state => state.meeting.members)
  console.log(members);
  const [selected, setSelected] = useState<number[]>([]);
  console.log(selected);

  const handleSelection = (id: number) => () => {
    const current = selected.indexOf(id);
    const newSelected = [...selected];

    if (current === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(current, 1);
    }
    setSelected(newSelected);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 240, bgcolor: '#eee' }}>
        <List>
          <ListItemText primary="Participants" />
          <Divider />
          {members.map((member)=>{
            return (
              <ListItem key={member.id}>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText secondary={member.name} />
                  <Checkbox
                    edge="end"
                    onChange={handleSelection(member.id)}
                    checked={selected.indexOf(member.id) !== -1}
                  />
              </ListItem>
            )
          })}
          
        </List>
    </Box>

  );

}


export default MemberList;