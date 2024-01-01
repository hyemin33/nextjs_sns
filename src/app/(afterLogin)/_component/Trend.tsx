import Link from "next/link";
import style from "./trend.module.css";
export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>오늘의점심</div>
      <div className={style.count}>마라탕</div>
    </Link>
  );
}
