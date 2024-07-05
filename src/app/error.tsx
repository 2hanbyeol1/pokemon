"use client";
import Button from "@/components/Button";
import Page from "@/components/Page";
import SpeechBubble from "@/components/SpeechBubble";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import nurseImage from "../../public/nurse.png";

interface ErrorPageType {
  error?: Error & { digest?: string };
  reset?: () => void;
}

function ErrorPage({ error, reset }: ErrorPageType) {
  const router = useRouter();

  useEffect(() => {
    if (!error) return;
    console.error(error);
  }, []);

  const handleButtonClicked = () => {
    router.refresh();
  };

  return (
    <Page centered>
      <div className="flex flex-col items-center gap-2 mb-8">
        <Image
          className="animate-shake1"
          width={80}
          height={80}
          src={nurseImage}
          alt="간호순"
        />
        <SpeechBubble>뭔가 잘못된 것 같습니다!</SpeechBubble>
      </div>
      <Button intent="danger" onClick={handleButtonClicked} size="sm">
        다시 시도
      </Button>
    </Page>
  );
}

export default ErrorPage;
