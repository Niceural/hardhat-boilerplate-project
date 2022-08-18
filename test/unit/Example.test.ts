import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { BigNumber } from "ethers";
import { network, deployments, ethers } from "hardhat";
import { developmentChains, networkConfig } from "../../utils/const";
import {} from "../../typechain-types";

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Example Unit Tests", function () {});
