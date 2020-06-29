void OnTick()
  {
  double AccountBalance = AccountInfoDouble(ACCOUNT_BALANCE);
  double Risk = AccountBalance * 0.02;
  double PriceArray[];
  double MaArray[];
  double AtrDefinition = iATR(NULL,0,14);
  ArraySetAsSeries(PriceArray, true);
  CopyBuffer(AtrDefinition,0,0,3,PriceArray);
  
  double BaselineDefinition = iMA(NULL,0,20,0,MODE_EMA,PRICE_CLOSE);
  ArraySetAsSeries(MaArray,true);
  CopyBuffer(BaselineDefinition,0,0,3,MaArray);
  double BaselineValue = NormalizeDouble(MaArray[0],4);
  double AtrValue = NormalizeDouble(PriceArray[0],4);
  double StopPips = NormalizeDouble(AtrValue * 1.5 * 10000,0);
  double PipValue = NormalizeDouble(Risk/StopPips,2);
  double Ask, Bid;
  Ask=NormalizeDouble(SymbolInfoDouble(Symbol(),SYMBOL_ASK),4); 
  Bid=NormalizeDouble(SymbolInfoDouble(Symbol(),SYMBOL_BID),4);
  double StopLoss = 0;
  double TakeProfit = 0;
  bool TooFar = false;
  
  if(Ask > BaselineValue){
  StopLoss = Ask - AtrValue * 1.5;
  TakeProfit = Ask + AtrValue;
  TooFar = MathAbs(Ask - BaselineValue) > AtrValue;
  }
  else{
  StopLoss = Bid + AtrValue * 1.5;
  TakeProfit = Bid - AtrValue;
  TooFar = MathAbs(Bid - BaselineValue) > AtrValue;
  }
  
  Comment(StringFormat("Risk = %G\nAsk = %G\nBid = %G\nATR = %G pips\nBaseline = %G\nStop = %G\nTake Profit = %G\nPip Value = $%G\nToo Far from Baseline = %G\n",Risk,Ask,Bid,AtrValue * 10000,BaselineValue,StopLoss,TakeProfit,PipValue,TooFar));
  }