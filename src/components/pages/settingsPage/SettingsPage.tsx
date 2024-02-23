import { Button } from "@material-tailwind/react";
export const SettingsPage = () => {
  return (
    <div className="flex w-max gap-4">
      <Button variant="filled" placeholder="">
        filled
      </Button>
      <Button variant="gradient" placeholder="">
        gradient
      </Button>
      <Button variant="outlined" placeholder="">
        outlined
      </Button>
      <Button variant="text" placeholder="">
        text
      </Button>
    </div>
  );
};
