import { useState } from 'react';

import Heading2 from '../atoms/headings/heading2';
import ControlDisplay from '../../components/organisms/controlDisplay';
import InputControl from '../../components/atoms/inputControl';
import { Select, DateInput } from 'grommet';

import styles from './formElementsDisplaySection.module.scss';

const FormElementsDisplaySection = (props) => {
  const [value, setValue] = useState('Net 30 Day');
  const options = ['Net 1 Day', 'Net 7 Day', 'Net 14 Day', 'Net 30 Day'];

  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>Form Elements Light</Heading2>
      <div className={styles.subContainer}>
        <div className={`${styles.row} ${styles['row-1']}`}>
          <ControlDisplay
            spanText="Text Field - Default"
            controlLabelText="Streed Address"
            controlId="textFieldDemo1"
          >
            <InputControl controlId="textFieldDemo1" />
          </ControlDisplay>
          <ControlDisplay
            spanText="Dropdown - Default"
            controlLabelText="Payment Terms"
            controlId="selectDemo1"
          >
            <Select
              size="small"
              options={options}
              value={value}
              onChange={({ option }) => setValue(option)}
            />
          </ControlDisplay>
          <ControlDisplay
            spanText="Date Picker - Default"
            controlLabelText="Issue Date"
            controlId="dateDemo1"
          >
            <DateInput
              size="small"
              format="mm/dd/yyyy"
              value={new Date().toISOString()}
              onChange={({ value }) => {}}
            />
          </ControlDisplay>
        </div>
        <div className={`${styles.row} ${styles['row-2']}`}>
          <ControlDisplay
            spanText="Text Field - Filled"
            controlLabelText="Streed Address"
            controlId="textFieldDemo2"
          >
            <InputControl controlId="textFieldDemo2" value="Lorem Ipsum Dolor" />
          </ControlDisplay>
          <ControlDisplay
            spanText="Dropdown - Hover"
            controlLabelText="Payment Terms"
            controlId="selectDemo2"
          >
            <Select
              size="small"
              options={options}
              value={value}
              onChange={({ option }) => setValue(option)}
            />
          </ControlDisplay>
          <ControlDisplay
            spanText="Date Picker - Default"
            controlLabelText="Issue Date"
            controlId="dateDemo2"
          >
            <DateInput
              size="small"
              format="mm/dd/yyyy"
              value={new Date().toISOString()}
              onChange={({ value }) => {}}
            />
          </ControlDisplay>
        </div>
        <div className={`${styles.row} ${styles['row-3']}`}>
          <ControlDisplay
            spanText="Text Field - Active"
            controlLabelText="Streed Address"
            controlId="textFieldDemo3"
          >
            <InputControl
              controlId="textFieldDemo3"
              value="Currently typing"
              includeActive={true}
            />
          </ControlDisplay>
          <ControlDisplay
            spanText="Dropdown - Active"
            controlLabelText="Payment Terms"
            controlId="selectDemo3"
          >
            <Select
              size="small"
              options={options}
              value={value}
              onChange={({ option }) => setValue(option)}
            />
          </ControlDisplay>
          <ControlDisplay
            spanText="Date Picker - Default"
            controlLabelText="Issue Date"
            controlId="dateDemo3"
          >
            <DateInput
              size="small"
              format="mm/dd/yyyy"
              value={new Date().toISOString()}
              onChange={({ value }) => {}}
            />
          </ControlDisplay>
        </div>
      </div>
    </section>
  );
};

export default FormElementsDisplaySection;
