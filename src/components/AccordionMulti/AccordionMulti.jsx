import { Accordion } from "../Accordion/Accordion";

export const AccordionMulti = ({ dataList, openAll }) => {
  return (
    <div>
      {dataList.map((item, index) => (
        <Accordion title={item.title} key={index} open={openAll}>
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};
