import Page from "@/components/Page";
import Image from "next/image";
import monsterballImage from "../../public/monsterball.png";

function LoadingPage() {
  return (
    <Page centered>
      <Image
        width={80}
        height={80}
        src={monsterballImage}
        alt="몬스터볼"
        className="animate-spin"
      />
    </Page>
  );
}

export default LoadingPage;
