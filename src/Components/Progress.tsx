import { Progress as Bar } from "flowbite-react";

const Progress = (props: any) => {
  return (
    <div>
      <Bar
        labelProgress
        labelText
        progress={props.progress}
        progressLabelPosition="inside"
        size="lg"
        textLabel="Uploading..."
        textLabelPosition="outside"
      />
    </div>
  );
};

export default Progress;
