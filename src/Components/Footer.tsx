import { Footer as Footers } from "flowbite-react";
const Footer = () => {
  return (
    <div>
      <Footers container className="relative mt-3 rounded-none">
        <Footers.Copyright by="Flowbite™" href="#" year={2022} />
        <Footers.LinkGroup>
          <Footers.Link href="#">About</Footers.Link>
          <Footers.Link href="#">Privacy Policy</Footers.Link>
          <Footers.Link href="#">Licensing</Footers.Link>
          <Footers.Link href="#">Contact</Footers.Link>
        </Footers.LinkGroup>
      </Footers>
    </div>
  );
};

export default Footer;
