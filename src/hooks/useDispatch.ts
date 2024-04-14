import { AppDispatch } from "@/store";
import { useDispatch as defaultDispatch } from "react-redux";

export const useDispatch = defaultDispatch.withTypes<AppDispatch>();
