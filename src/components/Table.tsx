import React from "react";
import { IElixirs } from "../App";

const Table = ({ data }: { data: IElixirs[] }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Manufacturer</th>
        <th>Difficulty</th>
        <th>Ingredient</th>
        <th>Inventor Full Name</th>
        <th>Effect</th>
        <th>Side Effects</th>
        <th>Characteristics</th>
      </tr>
      {data &&
        !!data.length &&
        data.map((item: IElixirs) => {
          return (
            <tr>
              <td>{item?.name}</td>
              <td>{item?.manufacturer}</td>
              <td>{item?.difficulty}</td>
              <td>
                {item?.ingredients?.map((element) => {
                  return (
                    <>
                      {element?.name}
                      <br />
                    </>
                  );
                })}
              </td>
              <td>
                {item?.inventors?.map((element) => {
                  return (
                    <>
                      {element?.firstName} {element?.lastName}
                      <br />
                    </>
                  );
                })}
              </td>
              <td>{item?.effect}</td>
              <td>{item?.sideEffects}</td>
              <td>{item?.characteristics}</td>
            </tr>
          );
        })}
    </table>
  );
};

export default Table;
