#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <react-native-app-auth/RNAppAuthAuthorizationFlowManager.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, RNAppAuthAuthorizationFlowManager>

@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, weak) id<RNAppAuthAuthorizationFlowManagerDelegate> authorizationFlowManagerDelegate;

@end
