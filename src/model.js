import { supabase } from "./supabase";

export const getCategories = async function () {
  try {
    let { data: categories, error } = await supabase
      .from("categories")
      .select("*");

    console.log(categories);
  } catch (error) {
    console.log(error);
  }
};
