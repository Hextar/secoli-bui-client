declare module "*.json" {
  const value: any;
  export default value;
}

// free-email-domains exports string array in json format
declare module 'free-email-domains' {
  const value: string[];
  export default value;
}
