/*
 * Institutions File
 * -----------------
 *
 * All bank name records should have keys formatted in one of two ways.
 * - The three-digit institution number.
 * - The five-digit transit number, a dash, the three-digit institution number.
 *
 * Transit numbers should only be added when the bank name changes
 * based on the transit number, as is the case with many credit unions.
 */

export const institutions: { [institutionNumber: string]: string } = {
  "001": "Bank of Montreal",
  "002": "Bank of Nova Scotia",
  "003": "Royal Bank of Canada",
  "004": "Toronto-Dominion Bank",
  "006": "Banque Nationale du Canada",

  "010": "Canadian Imperial Bank of Commerce",
  "30800-010": "Simplii Financial",

  "016": "HSBC Bank Canada",
  "030": "Canadian Western Bank",
  "039": "Banque Laurentienne du Canada",

  "270": "JP Morgan Chase Bank",

  "326": "President's Choice Financial",
  "328": "Citibank",

  "509": "The Canada Trust Company",
  "540": "Manulife Bank of Canada",

  "614": "Tangerine Bank",

  "828": "Central 1 Credit Union",
  "03832-828": "Community First Credit Union",
  "14492-828": "Northern Credit Union",
  "60172-828": "Northern Credit Union",
  "60182-828": "Northern Credit Union",
  "61842-828": "Northern Credit Union"
};

export default institutions;
