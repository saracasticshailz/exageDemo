//
//  EmulatorDetection.m
//  exageDemom
//
//  Created by apple on 3/20/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(EmulatorDetectionModule, NSObject)
RCT_EXTERN_METHOD(isEmulator : (RCTResponseSenderBlock)callback)

@end
