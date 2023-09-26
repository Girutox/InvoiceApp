import Heading2 from '../atoms/headings/heading2';
import Heading3 from '../atoms/headings/heading3';
import InputControl from '../atoms/inputControl';
import FormControl from '../molecules/formControl';
import Button2Default from '../organisms/buttons/button2Default';
import Button3Default from '../organisms/buttons/button3Default';
import Button4Default from '../organisms/buttons/button4Default';
import Button6Default from '../organisms/buttons/button6Default';

import { useState } from 'react';

import { Select, DateInput } from 'grommet';

import styles from './ManageInvoice.module.scss';

const ManageInvoice = ({ data }) => {
  const [value, setValue] = useState('Net 30 Day');
  const options = ['Net 1 Day', 'Net 7 Day', 'Net 14 Day', 'Net 30 Day'];

  return (
    <div className={styles.container}>
      <Heading2>Edit <span className={styles.code}>{data.code}</span></Heading2>
      <section>
        <Heading3 className={styles.sectionTitle}>Bill From</Heading3>
        <div className={styles.row}>
          <FormControl controlId='billFromStreetAddress' labelText='Street Addres'>
            <InputControl controlId='billFromStreetAddress'></InputControl>
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl controlId='billFromCity' labelText='City'>
            <InputControl controlId='billFromCity'></InputControl>
          </FormControl>
          <FormControl controlId='billFromPostCode' labelText='Post Code'>
            <InputControl controlId='billFromPostCode'></InputControl>
          </FormControl>
          <FormControl controlId='billFromCountry' labelText='Country'>
            <InputControl controlId='billFromCountry'></InputControl>
          </FormControl>
        </div>
      </section>
      <section>
        <Heading3 className={styles.sectionTitle}>Bill To</Heading3>
        <div className={styles.row}>
          <FormControl controlId='billTo' labelText="Client's Name">
            <InputControl controlId='billTo'></InputControl>
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl controlId='sentTo' labelText="Client's Email">
            <InputControl controlId='sentTo'></InputControl>
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl controlId='billToStreetAddress' labelText='Street Addres'>
            <InputControl controlId='billToStreetAddress'></InputControl>
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl controlId='billToCity' labelText='City'>
            <InputControl controlId='billToCity'></InputControl>
          </FormControl>
          <FormControl controlId='billToPostCode' labelText='Post Code'>
            <InputControl controlId='billToPostCode'></InputControl>
          </FormControl>
          <FormControl controlId='billToCountry' labelText='Country'>
            <InputControl controlId='billToCountry'></InputControl>
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl controlId='invoiceDate' labelText='Invoice Date'>
            <DateInput
              size="small"
              format="mm/dd/yyyy"
              value={new Date().toISOString()}
              onChange={({ value }) => { }}
            />
          </FormControl>
          <FormControl controlId='paymentTerms' labelText='Payment Terms'>
            <Select
              size="small"
              options={options}
              value={value}
              onChange={({ option }) => setValue(option)}
            />
          </FormControl>
        </div>
      </section>
      <section>
        <Heading3 className={styles.sectionTitle}>Item List</Heading3>
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th className='color-secondary-2 body1'>Item Name</th>
              <th className='color-secondary-2 body1'>Qty.</th>
              <th className='color-secondary-2 body1'>Price</th>
              <th className='color-secondary-2 body1'>Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <Button6Default spanText="+ Add New Item" />
      </section>
      <div className={styles.row}>
        <Button3Default spanText="Discard" />
        <div className={styles.row}>
          <Button4Default spanText="Save as Draft" />
          <Button2Default spanText="Save & Send" />
        </div>
      </div>
    </div>
  );
};

export default ManageInvoice;
