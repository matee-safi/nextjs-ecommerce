import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import dynamic from "next/dynamic";

const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);

interface Props {
  ingredients: string;
  weight: string;
  delivery: string;
}

export default function Info({ ingredients, weight, delivery }: Props) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Additional Information</Tab>
      </TabList>
      <TabPanel>
        <h2>Ingredients</h2>
        <p>{ingredients}</p>
      </TabPanel>
      <TabPanel>
        <h2>Additional Information</h2>
        <table className="additional-info">
          <tbody>
            <tr>
              <th>Weight:</th>
              <td>{weight}</td>
            </tr>
            <tr>
              <th>Delivery:</th>
              <td>
                <p>{delivery}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
    </Tabs>
  );
}
