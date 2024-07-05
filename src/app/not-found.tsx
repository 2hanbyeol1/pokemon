"use client";
import Button from "@/components/Button";
import Page from "@/components/Page";
import SpeechBubble from "@/components/SpeechBubble";
import Image from "next/image";
import { useRouter } from "next/navigation";
import doctorImage from "../../public/doctor.png";

function NotFoundPage() {
  const router = useRouter();

  const handleButtonClicked = () => {
    router.replace("/");
  };

  return (
    <Page centered>
      <div className="flex flex-col items-center gap-2 mb-8">
        <Image
          className="animate-shake1"
          width={80}
          height={80}
          src={doctorImage}
          alt="마박사"
        />
        <SpeechBubble>
          허허, 길을 잘못 들었군..₩다시 도감으로 돌아가렴
        </SpeechBubble>
      </div>
      <Button intent="primary" onClick={handleButtonClicked} size="sm">
        알겠습니다 박사님!
      </Button>
    </Page>
  );
}

export default NotFoundPage;
