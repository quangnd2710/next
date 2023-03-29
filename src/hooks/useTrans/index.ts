import { useRouter } from "next/router";
import listLanguages from "@/translation";
import { get } from "lodash";

const useTrans = () => {
  const { locale = "en" } = useRouter();
  const trans = get(listLanguages, locale);

  return trans;
};

export default useTrans;
