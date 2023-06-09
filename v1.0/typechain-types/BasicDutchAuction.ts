/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BasicDutchAuctionInterface extends utils.Interface {
  functions: {
    "bid()": FunctionFragment;
    "getCurrentPrice()": FunctionFragment;
    "initialPrice()": FunctionFragment;
    "numBlocksAuctionOpen()": FunctionFragment;
    "offerPriceDecrement()": FunctionFragment;
    "owner()": FunctionFragment;
    "reservePrice()": FunctionFragment;
    "startBlock()": FunctionFragment;
    "winner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bid"
      | "getCurrentPrice"
      | "initialPrice"
      | "numBlocksAuctionOpen"
      | "offerPriceDecrement"
      | "owner"
      | "reservePrice"
      | "startBlock"
      | "winner"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPriceDecrement",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "winner", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPriceDecrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;

  events: {};
}

export interface BasicDutchAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasicDutchAuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bid(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getCurrentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    winner(overrides?: CallOverrides): Promise<[string]>;
  };

  bid(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

  offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  winner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bid(overrides?: CallOverrides): Promise<string>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    winner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bid(overrides?: PayableOverrides & { from?: string }): Promise<BigNumber>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    winner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bid(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getCurrentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksAuctionOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerPriceDecrement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
