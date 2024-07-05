type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string; korean_name: TypeKorean } }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
  cries: { latest: string; legacy: string };
};

type TypeKorean =
  | "노말"
  | "불꽃"
  | "물"
  | "풀"
  | "전기"
  | "얼음"
  | "격투"
  | "독"
  | "땅"
  | "비행"
  | "에스퍼"
  | "벌레"
  | "바위"
  | "고스트"
  | "드래곤"
  | "악"
  | "강철"
  | "페어리";
