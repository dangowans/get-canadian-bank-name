/*
 * Institutions File
 * -----------------
 *
 * All bank name records should have keys formatted as
 * a five-digit transit number, a dash, and a three-digit institution number.
 *
 * The main bank record should use '00000' as the transit number.
 * Additional transit numbers should only be added when the bank name changes
 * as is the case with many credit unions.
 */

/**
 * Five-digit transit number, dash, three-digit institution number.
 */
type InstitutionKey = `${number}-${number}`

export const institutions: Record<InstitutionKey, string> = {
  '00000-001': 'Bank of Montreal',
  '00000-002': 'Bank of Nova Scotia',
  '00000-003': 'Royal Bank of Canada',
  '00000-004': 'Toronto-Dominion Bank',
  '00000-006': 'Banque Nationale du Canada',

  '00000-010': 'Canadian Imperial Bank of Commerce',
  '30800-010': 'Simplii Financial',

  '00000-016': 'HSBC Bank Canada',

  '00000-030': 'Canadian Western Bank',
  '00000-039': 'Banque Laurentienne du Canada',

  '00000-177': 'Bank of Canada',

  '00000-241': 'Bank of America National Association',
  '00000-242': 'Bank of New York Mellon',
  '00000-248': 'Barclays Bank of Canada',
  '00000-249': 'SBI Canada Bank',
  '00000-250': 'BNP Paribas',
  '00000-260': 'Citibank Canada',
  '00000-265': 'Deutsche Bank AG',
  '00000-270': 'JP Morgan Chase Bank, National Assoc.',
  '00000-275': 'Keb Hana Bank Canada',
  '00000-290': 'UBS Bank (Canada)',

  '00000-303': 'AMEX Bank of Canada',
  '00000-307': 'Industrial & Commercial Bank of China',
  '00000-308': 'Bank of China (Canada)',
  '00000-309': 'Vancity Community Investment Bank',
  '00000-310': 'First Nations Bank of Canada',
  '00000-314': 'JP Morgan Bank Canada',
  '00000-315': 'CTBC Bank Corp. (Canada)',
  '00000-320': "President's Choice Bank",
  '00000-321': 'Habib Canadian Bank',
  '00000-323': 'Capital One Bank (Canada Branch)',
  '00000-326': "President's Choice Financial",
  '00000-328': 'Citibank',
  '00000-330': 'Comerica Bank',
  '00000-338': 'Canadian Tire Bank',
  '00000-340': 'ICICI Bank Canada',
  '00000-343': 'ADS Canadian Bank',
  '00000-346': 'Societe Generale (Canada Branch)',
  '00000-355': 'Shinhan Bank Canada',
  '00000-362': 'Wells Fargo Bank NA Canadian Branch',
  '00000-370': 'Wealth One Bank of Canada',

  '00000-509': 'The Canada Trust Company',
  '00000-540': 'Manulife Bank of Canada',

  '00000-614': 'Tangerine Bank',

  '00000-809': 'Central 1 Credit Union',
  '00000-815': 'Federation des Caisses Desj. Quebec',
  '00000-819': 'Caisse Financial Group',

  '00000-828': 'Central 1 Credit Union',
  '03832-828': 'Community First Credit Union',
  '14492-828': 'Northern Credit Union',
  '60172-828': 'Northern Credit Union',
  '60182-828': 'Northern Credit Union',
  '61842-828': 'Northern Credit Union',

  '00000-829': "Fed. des Caisses Pop. de l'Ontario",
  '00000-837': 'Meridian Credit Union Limited',
  '00000-839': 'Credit Union Central of Nova Scotia',
  '00000-849': 'Brunswick Cr. Union Federation Ltd.',
  '00000-853': 'Concentra Bank',
  '00000-865': 'Fed. des Caisses Pop. Acadiennes',
  '00000-879': 'Credit Union Central of Manitoba',
  '00000-889': 'Credit Union Central of Saskatchewan',
  '00000-890': 'Caisse Populaire Alliance Limitee',
  '00000-899': 'Central 1 Credit Union - Alberta'
}

export const institutionCommonNames = {
  BMO: '001',
  ScotiaBank: '002',
  RBC: '003',
  TD: '004',
  CIBC: '010',
  HSBC: '016'
} as const
