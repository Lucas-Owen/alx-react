import React from "react";
import { render, screen } from '@testing-library/react';
import { getFooterCopy, getFullYear, getLatestNotification } from '../../../../task_2/dashboard/src/utils';
import {expect, test} from '@jest/globals';

test("getFullYear returns the correct year", ()=>{
  expect(getFullYear()).toEqual((new Date()).getFullYear());
});

test("getFooterCopy returns correct string", ()=>{
  expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  expect(getFooterCopy()).toEqual(getFooterCopy(false));
  expect(getFooterCopy(true)).toEqual("Holberton School");
});

test("getLatestNotification returns string", ()=>{
  expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
});
