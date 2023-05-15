import { IsoDate, Ticker } from "@core";
import { EHDEndOfDayPrice } from "ehd-js/src/types/model";

export type TickerAndPrice = { [K: Ticker]: number }

export type TickerPriceData = { [K: IsoDate]: EHDEndOfDayPrice[] }