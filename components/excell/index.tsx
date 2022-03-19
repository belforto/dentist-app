import { useState } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from "react-datasheet-grid";
import styles from "./excell.module.scss";

// Import the style only once in your app!
import "react-datasheet-grid/dist/style.css";
import { Operation } from "react-datasheet-grid/dist/types";

export const Luckysheet = () => {
  const [data, setData] = useState([
    {
      serviceOffered: "Ugradnja implatata",
      quantity: "",
      price: "",
      total: 0,
      visit: "",
      visitDelta: "",
    },
    {
      serviceOffered: "Izbjeljivanje zubi",
      quantity: "",
      price: "",
      total: 0,
      visit: "",
      visitDelta: "",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const columns = [
    { ...keyColumn("serviceOffered", textColumn), title: "Usluga" },
    { ...keyColumn("quantity", textColumn), title: "Količina" },
    { ...keyColumn("price", textColumn), title: "Cijena €" },
    { ...keyColumn("total", textColumn), disabled: true, title: "Ukupno €" },
    { ...keyColumn("visit", textColumn), title: "Posjet" },
    { ...keyColumn("visitDelta", textColumn), title: "Sljedeći posjet za" },
  ];
  const calculateServicesCost = (newRows: any, operations: Operation[]) => {
    //    console.log(newRows, operations);

    for (const operation of operations) {
      if (operation.type === "UPDATE") {
        for (const row of newRows.slice(
          operation.fromRowIndex,
          operation.toRowIndex
        )) {
          // console.log("row  ",row);
          try {
            row.total = row.price * row.quantity;
            // console.log(' row.total= row.price*row.quantity: ',  row.total, row.price,row.quantity)
          } catch (error) {
            row.total = "ERR";
          }
        }
      }
    }
    const sum = newRows.reduce(function (result: any, item: any) {
      return result + item.total;
    }, 0);
    setTotalPrice(sum);

    setData(newRows);
  };

  return (
    <>
      <DataSheetGrid
        value={data}
        onChange={calculateServicesCost}
        columns={columns}
      />
      <div className={styles.totalPriceRow}>
        <h3>Ukupna cijena

        {" " + totalPrice + " EUR"}
        </h3>
      </div>
    </>
  );
};

export default Luckysheet;
