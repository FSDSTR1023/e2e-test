import { useState } from "react";
import { AccordionMulti } from "./components/AccordionMulti/AccordionMulti";
import { Button } from "./components/Button/Button";

const dataList = [
  {
    title: "Título 1",
    content:
      "Asperiores, architecto. Qui explicabo debitis unde distinctio incidunt aspernatur totam voluptatibus. Dignissimos perferendis, nobis possimus doloribus voluptatem nihil, explicabo aperiam dolorum dolorem assumenda beatae repudiandae! Mollitia sequi quo ab quod blanditiis rem sunt omnis modi? Quod, vero soluta. Placeat atque reprehenderit ipsam.",
  },
  {
    title: "Título 2",
    content:
      "Beatae laudantium, inventore incidunt est facere excepturi porro accusantium reprehenderit neque ullam illo quibusdam. Delectus dicta reprehenderit officiis autem, eveniet ab laudantium obcaecati aperiam unde laboriosam, corporis qui, nostrum veniam. Quos provident minus nisi consequuntur. Repudiandae deleniti fugiat vel ratione, aut debitis ipsa, unde similique minima in natus optio laudantium saepe sed earum dolorum. Vero vel eos numquam incidunt beatae laborum quasi autem accusamus cumque natus sit quos saepe, voluptatibus expedita ad dolor quis neque explicabo dolore id ea magni rem voluptate facilis? Consequuntur natus voluptas inventore corrupti officia amet odit officiis.",
  },
  {
    title: "Título 3",
    content:
      "Odit consectetur, dolorem eum minima quo quae modi aperiam enim dicta molestias saepe vero architecto omnis. Itaque debitis, doloribus perspiciatis, fugit, amet facere consequatur rem autem impedit aspernatur labore! Dolore sit harum quod dolorum? Temporibus labore autem repellendus nulla, eligendi eos libero.",
  },
];

function App() {
  const [openAll, setOpenAll] = useState(false);

  return (
    <div>
      <AccordionMulti dataList={dataList} openAll={openAll} />
      <Button onClick={() => setOpenAll(!openAll)}>{`${
        openAll ? "Close" : "Open"
      } all`}</Button>
    </div>
  );
}

export default App;
