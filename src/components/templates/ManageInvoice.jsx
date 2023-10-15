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
import { useDispatch } from 'react-redux';
import { edit } from '../../redux/slices/invoiceSlice';

import styles from './ManageInvoice.module.scss';

const ManageInvoice = ({ data, onCloseModal }) => {
  // const [value, setValue] = useState('Net 30 Day');
  // const options = ['Net 1 Day', 'Net 7 Day', 'Net 14 Day', 'Net 30 Day'];

  const [copyData, setCopyData] = useState({ ...data });

  const dispatcher = useDispatch();

  const inputChangeHandler = (event) => {
    setCopyData({ ...copyData, [event.target.name]: event.target.value });
  };

  const rowItemChangeHandler = (evt, id) => {
    const localCopy = [...copyData.detailRows];

    for (const item of localCopy) {
      if (item.id === id) {
        item[evt.target.name.split('-')[0]] = evt.target.value;
      }
    }

    setCopyData({
      ...copyData,
      detailRows: localCopy
    });
  };

  const rowItemDeleteHandler = (id) => {
    setCopyData({
      ...copyData,
      detailRows: copyData.detailRows.filter((item) => item.id !== id)
    });
  };

  const addRowHandler = () => {
    const newRow = {
      id: copyData.detailRows.length + 1,
      itemName: '',
      itemQuantity: 0,
      itemPrice: 0
    };
    setCopyData({ ...copyData, detailRows: [...copyData.detailRows, newRow] });
  };

  const saveAndSendClickHandler = () => {
    dispatcher(edit(copyData));
    onCloseModal();
  };

  return (
    <div className={styles.container}>
      <Heading2>Edit <span className={styles.code}>{copyData.code}</span></Heading2>
      <form>
        <section>
          <Heading3 className={styles.sectionTitle}>Bill From</Heading3>
          <div className={styles.row}>
            <FormControl controlId='billFromStreetAddress' labelText='Street Addres'>
              <InputControl
                controlId='billFromStreetAddress'
                value={copyData.billFromStreetAddress}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
          <div className={styles.row}>
            <FormControl controlId='billFromCity' labelText='City'>
              <InputControl
                controlId='billFromCity'
                value={copyData.billFromCity}
                onChange={inputChangeHandler} />
            </FormControl>
            <FormControl controlId='billFromPostCode' labelText='Post Code'>
              <InputControl
                controlId='billFromPostCode'
                value={copyData.billFromPostCode}
                onChange={inputChangeHandler} />
            </FormControl>
            <FormControl controlId='billFromCountry' labelText='Country'>
              <InputControl
                controlId='billFromCountry'
                value={copyData.billFromCountry}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
        </section>
        <section>
          <Heading3 className={styles.sectionTitle}>Bill To</Heading3>
          <div className={styles.row}>
            <FormControl controlId='billTo' labelText="Client's Name">
              <InputControl
                controlId='billTo'
                value={copyData.billTo}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
          <div className={styles.row}>
            <FormControl controlId='sentTo' labelText="Client's Email">
              <InputControl
                controlId='sentTo'
                value={copyData.sentTo}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
          <div className={styles.row}>
            <FormControl controlId='billToStreetAddress' labelText='Street Addres'>
              <InputControl
                controlId='billToStreetAddress'
                value={copyData.billToStreetAddress}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
          <div className={styles.row}>
            <FormControl controlId='billToCity' labelText='City'>
              <InputControl
                controlId='billToCity'
                value={copyData.billToCity}
                onChange={inputChangeHandler} />
            </FormControl>
            <FormControl controlId='billToPostCode' labelText='Post Code'>
              <InputControl controlId='billToPostCode'
                value={copyData.billToPostCode}
                onChange={inputChangeHandler} />
            </FormControl>
            <FormControl controlId='billToCountry' labelText='Country'>
              <InputControl
                controlId='billToCountry'
                value={copyData.billToCountry}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
          <div className={styles.row}>
            <FormControl controlId='invoiceDate' labelText='Invoice Date'>
              <DateInput
                name='invoiceDate'
                size="small"
                format="mm/dd/yyyy"
                defaultValue={copyData.invoiceDate.toISOString()}
                onChange={({ value }) => { setCopyData({ ...copyData, invoiceDate: new Date(value) }); }}
              />
            </FormControl>
            {/* <FormControl controlId='paymentTerms' labelText='Payment Terms'>
              <Select
                size="small"
                options={options}
                value={value}
                onChange={({ option }) => setValue(option)}
              />
            </FormControl> */}
          </div>
          <div className={styles.row}>
            <FormControl controlId='projectDescription' labelText='Project Description'>
              <InputControl
                controlId='projectDescription'
                value={copyData.projectDescription}
                onChange={inputChangeHandler} />
            </FormControl>
          </div>
        </section>
        <section>
          <Heading3 className={styles.sectionTitle}>Item List</Heading3>
          <table className={styles.customTable}>
            <thead>
              <tr>
                <th className='color-secondary-2 body1' style={{ width: '200px' }}>Item Name</th>
                <th className='color-secondary-2 body1'>Qty.</th>
                <th className='color-secondary-2 body1'>Price</th>
                <th className='color-secondary-2 body1'>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                copyData.detailRows?.map((row) => {
                  return <tr key={row.id}>
                    <td>
                      <InputControl
                        controlId={`itemName-${row.id}`}
                        name={`itemName-${row.id}`}
                        value={row.itemName}
                        onChange={(evt) => rowItemChangeHandler(evt, row.id)} />
                    </td>
                    <td>
                      <InputControl
                        controlId={`itemQuantity-${row.id}`}
                        name={`itemQuantity-${row.id}`}
                        value={row.itemQuantity}
                        onChange={(evt) => rowItemChangeHandler(evt, row.id)} />
                    </td>
                    <td>
                      <InputControl
                        controlId={`itemPrice-${row.id}`}
                        name={`itemPrice-${row.id}`}
                        value={row.itemPrice}
                        onChange={(evt) => rowItemChangeHandler(evt, row.id)} />
                    </td>
                    <td className='color-secondary-2 body1'>
                      {(row.itemPrice * row.itemQuantity).toFixed(2)}
                    </td>
                    <td>
                      <button onClick={() => rowItemDeleteHandler(row.id)}>-</button>
                    </td>
                  </tr>;
                })
              }
            </tbody>
          </table>
          <Button6Default spanText="+ Add New Item" onClick={addRowHandler} />
        </section>
        <div className={styles.row}>
          <Button3Default spanText="Cancel" onClick={onCloseModal} />
          <div className={styles.row}>
            {/* <Button4Default spanText="Save as Draft" /> */}
            <Button2Default spanText="Save & Send" onClick={saveAndSendClickHandler} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageInvoice;
