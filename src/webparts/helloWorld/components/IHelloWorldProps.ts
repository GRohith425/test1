import{SPHttpClient,SPHttpClientResponse} from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IHelloWorldProps {
  description: string;
  spHttpClient:SPHttpClient;
  siteUrl:string;
  context:WebPartContext;
}
