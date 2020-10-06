import React, {useState, useMemo} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  function setDate(_event, date) {
    if (date !== undefined) {
      setOpened(!opened);
      onChange(date);
    } else {
      setOpened(!opened);
    }
  }

  return (
    <Container>
      <DateButton
        onPress={() => {
          setOpened(!opened);
        }}>
        <Icon name="event" size={20} color="#fff" />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={setDate}
            minimumDate={new Date()}
            locale="pt"
            display="default"
          />
        </Picker>
      )}
    </Container>
  );
}
