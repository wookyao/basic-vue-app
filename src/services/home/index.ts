import request from "@/libs/request";
import { JSONType, IHttpRes } from "@/interfaces/base";

export interface IRecentRet {
  cateName: string;
  cateNo: string;
  list: JSONType[];
}

export async function getRecentOut(): Promise<IRecentRet> {
  const res = await request.get<IHttpRes, IHttpRes>(
    "/service/stock/out/recent"
  );

  let dataList: JSONType[] = [];
  if (!res.fail) {
    dataList = res.data.data as JSONType[];
  }
  return {
    cateName: "最近出库",
    cateNo: "out",
    list: dataList,
  };
}
