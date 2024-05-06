"use client";

import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AutoTopUp = ({ labelValues, minValue, maxValue }: any) => {

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#2CAE9D',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  const [showSetting, setShowSetting] = useState(true);
  const [sliderValue, setSliderValue] = useState(10);
  const [sliderCredits, setSliderCredits] = useState(1200);

  const handleSliderValue = (event: any) => {
    setSliderValue(event.target.value);
    setOpenAlert(false);
  }

  const handleSelectValue = (event: any) => {
    setSliderValue(event.target.value);
    setOpenAlert(false);
  }

  useEffect(() => {
    switch (sliderValue) {
      case 5:
        setSliderCredits(500);
        break;
      case 10:
        setSliderCredits(1200);
        break;
      case 15:
        setSliderCredits(1700);
        break;
      case 20:
        setSliderCredits(2500);
        break;
      case 25:
        setSliderCredits(3900);
        break;
      case 30:
        setSliderCredits(5000);
        break;
      default: setSliderCredits(1200);
        break;
    }
  }, [sliderValue]);

  const printValues = () => {
    console.log(`
      Threshold: $${sliderValue} And Credits: ${sliderCredits}
    `);
    setOpenAlert(true);
  };

  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>

      <div className="w-full h-fit">
        <Collapse in={openAlert}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                x
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Thanks for submitting. Your threshold is: ${sliderValue} and your credits will be {sliderCredits}
          </Alert>
        </Collapse>
      </div>

      <div className='p-4'>



        <div className="rounded-2xl border-2 p-6 lg:w-9/12 md:w-10/12 sm:w-11/12 w-full mx-auto">
          <div className="flex items-center gap-4">
            <p className="font-semibold text-gray-800 text-2xl">Setup Auto Top-up</p>
            <AntSwitch size="medium" defaultChecked={showSetting} onChange={(event) => setShowSetting(event.target.checked)} inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          <div className="text-md mt-1">
            <p className="text-gray-500">
              Once the credit goes below a minimum threshold <span className="text-[#9747FF] font-bold">{sliderValue}</span>, we will auto-purchase <span className="text-[#9747FF] font-bold">{sliderCredits}</span> credits and add them to your account.{" "}
              <Link href={"#!"} className="font-bold underline">
                Learn more
              </Link>
            </p>
          </div>
          {
            showSetting && <>
              <div className="lg:flex md:hidden sm:hidden hidden relative mt-4">
                <Slider
                  shiftStep={50}
                  aria-label="slider"
                  value={sliderValue}
                  step={5}
                  min={minValue}
                  max={maxValue}
                  marks={labelValues}
                  style={{ color: "#9747FF", height: "8px" }}
                  onChange={handleSliderValue}
                />
              </div>
              <div className="lg:hidden md:flex sm:flex flex mt-8">
                <FormControl sx={{ minWidth: "100%" }} size="small">
                  <InputLabel color='secondary' id="demo-simple-select-autowidth-label" style={{ minWidth: "300px" }}>Select your plan</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={sliderValue}
                    label="Select your plan"
                    color='secondary'
                    onChange={handleSelectValue}
                  >
                    <MenuItem value={5}>$5 (500 credits)</MenuItem>
                    <MenuItem value={10}>$10 (1200 credits)</MenuItem>
                    <MenuItem value={15}>$15 (1700 credits)</MenuItem>
                    <MenuItem value={20}>$20 (2500 credits)</MenuItem>
                    <MenuItem value={25}>$25 (3900 credits)</MenuItem>
                    <MenuItem value={30}>$30 (5000 credits)</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </>
          }

          <div className="mt-12">
            <Button disabled={!showSetting} className='confirm-btn' onClick={printValues} size="medium" variant="contained">
              Confirm auto-purchase
            </Button>
          </div>

        </div>
      </div>


    </>
  )
}

export default AutoTopUp